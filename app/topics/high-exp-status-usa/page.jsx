import HighExpStatusUsaKeywordPage, { generateMetadata } from './high-exp-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusUsaKeywordPage />;
}
