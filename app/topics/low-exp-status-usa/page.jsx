import LowExpStatusUsaKeywordPage, { generateMetadata } from './low-exp-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusUsaKeywordPage />;
}
