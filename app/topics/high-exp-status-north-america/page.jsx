import HighExpStatusNorthAmericaKeywordPage, { generateMetadata } from './high-exp-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusNorthAmericaKeywordPage />;
}
