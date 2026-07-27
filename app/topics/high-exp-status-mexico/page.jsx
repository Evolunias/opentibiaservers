import HighExpStatusMexicoKeywordPage, { generateMetadata } from './high-exp-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusMexicoKeywordPage />;
}
