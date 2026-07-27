import FreshStartClassicusOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusOpenTibiaKeywordPage />;
}
