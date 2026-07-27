import FreshStartThaisotTibiaKeywordPage, { generateMetadata } from './fresh-start-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotTibiaKeywordPage />;
}
