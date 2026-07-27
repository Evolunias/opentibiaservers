import OfficialNepreniaOtsKeywordPage, { generateMetadata } from './official-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaOtsKeywordPage />;
}
