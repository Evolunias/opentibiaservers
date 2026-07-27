import FreshStartNilotTibiaKeywordPage, { generateMetadata } from './fresh-start-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotTibiaKeywordPage />;
}
