import OfficialNtoStarKeywordPage, { generateMetadata } from './official-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarKeywordPage />;
}
