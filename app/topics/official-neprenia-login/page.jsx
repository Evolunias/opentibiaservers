import OfficialNepreniaLoginKeywordPage, { generateMetadata } from './official-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaLoginKeywordPage />;
}
