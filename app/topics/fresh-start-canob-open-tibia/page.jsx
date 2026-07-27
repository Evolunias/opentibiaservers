import FreshStartCanobOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobOpenTibiaKeywordPage />;
}
