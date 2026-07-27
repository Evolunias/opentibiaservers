import FreshStartMidhemTibiaKeywordPage, { generateMetadata } from './fresh-start-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemTibiaKeywordPage />;
}
