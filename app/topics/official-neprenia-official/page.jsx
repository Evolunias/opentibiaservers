import OfficialNepreniaOfficialKeywordPage, { generateMetadata } from './official-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaOfficialKeywordPage />;
}
