import HighExpStatusBrazilKeywordPage, { generateMetadata } from './high-exp-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusBrazilKeywordPage />;
}
