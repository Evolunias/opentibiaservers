import FreshStartStatusMexicoKeywordPage, { generateMetadata } from './fresh-start-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusMexicoKeywordPage />;
}
