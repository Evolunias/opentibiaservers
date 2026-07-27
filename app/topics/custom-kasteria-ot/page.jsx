import CustomKasteriaOtKeywordPage, { generateMetadata } from './custom-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaOtKeywordPage />;
}
