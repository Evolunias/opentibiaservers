import FreshStartTibiaraOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraOpenTibiaKeywordPage />;
}
