import FreshStartMidhemOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemOpenTibiaKeywordPage />;
}
