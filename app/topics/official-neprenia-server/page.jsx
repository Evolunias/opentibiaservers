import OfficialNepreniaServerKeywordPage, { generateMetadata } from './official-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaServerKeywordPage />;
}
