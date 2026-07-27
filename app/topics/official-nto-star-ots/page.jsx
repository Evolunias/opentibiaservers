import OfficialNtoStarOtsKeywordPage, { generateMetadata } from './official-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarOtsKeywordPage />;
}
