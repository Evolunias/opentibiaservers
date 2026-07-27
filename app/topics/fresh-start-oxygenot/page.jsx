import FreshStartOxygenotKeywordPage, { generateMetadata } from './fresh-start-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOxygenotKeywordPage />;
}
