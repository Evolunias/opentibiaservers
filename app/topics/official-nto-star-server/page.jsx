import OfficialNtoStarServerKeywordPage, { generateMetadata } from './official-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarServerKeywordPage />;
}
