import LowExpStatusPolandKeywordPage, { generateMetadata } from './low-exp-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusPolandKeywordPage />;
}
