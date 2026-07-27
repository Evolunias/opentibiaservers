import OfficialNepreniaClientKeywordPage, { generateMetadata } from './official-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaClientKeywordPage />;
}
