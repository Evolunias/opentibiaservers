import OfficialNepreniaOpenTibiaKeywordPage, { generateMetadata } from './official-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaOpenTibiaKeywordPage />;
}
