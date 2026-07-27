import FreshStartOxygenotTibiaKeywordPage, { generateMetadata } from './fresh-start-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOxygenotTibiaKeywordPage />;
}
