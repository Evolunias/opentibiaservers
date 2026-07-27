import CustomKasteriaOtServerKeywordPage, { generateMetadata } from './custom-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaOtServerKeywordPage />;
}
