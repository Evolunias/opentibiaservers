import HighExpStatusCanadaKeywordPage, { generateMetadata } from './high-exp-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusCanadaKeywordPage />;
}
