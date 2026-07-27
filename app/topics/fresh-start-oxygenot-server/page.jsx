import FreshStartOxygenotServerKeywordPage, { generateMetadata } from './fresh-start-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOxygenotServerKeywordPage />;
}
