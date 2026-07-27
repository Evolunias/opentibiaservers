import HighExpStatusLatinAmericaKeywordPage, { generateMetadata } from './high-exp-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusLatinAmericaKeywordPage />;
}
