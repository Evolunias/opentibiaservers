import CustomNepreniaOtsKeywordPage, { generateMetadata } from './custom-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaOtsKeywordPage />;
}
