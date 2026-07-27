import OfficialNtoStarTibiaKeywordPage, { generateMetadata } from './official-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarTibiaKeywordPage />;
}
