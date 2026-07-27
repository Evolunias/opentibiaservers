import LowExpStatusArgentinaKeywordPage, { generateMetadata } from './low-exp-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusArgentinaKeywordPage />;
}
