import LowExpStatusMexicoKeywordPage, { generateMetadata } from './low-exp-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusMexicoKeywordPage />;
}
