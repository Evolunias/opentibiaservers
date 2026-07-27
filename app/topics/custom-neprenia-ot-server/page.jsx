import CustomNepreniaOtServerKeywordPage, { generateMetadata } from './custom-neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaOtServerKeywordPage />;
}
