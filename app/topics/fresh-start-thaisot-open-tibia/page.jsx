import FreshStartThaisotOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotOpenTibiaKeywordPage />;
}
