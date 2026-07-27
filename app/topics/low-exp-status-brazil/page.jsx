import LowExpStatusBrazilKeywordPage, { generateMetadata } from './low-exp-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusBrazilKeywordPage />;
}
