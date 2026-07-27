import OfficialNtoStarClientKeywordPage, { generateMetadata } from './official-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarClientKeywordPage />;
}
