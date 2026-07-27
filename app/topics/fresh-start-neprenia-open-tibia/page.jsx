import FreshStartNepreniaOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaOpenTibiaKeywordPage />;
}
