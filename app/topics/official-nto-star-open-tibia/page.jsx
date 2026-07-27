import OfficialNtoStarOpenTibiaKeywordPage, { generateMetadata } from './official-nto-star-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarOpenTibiaKeywordPage />;
}
