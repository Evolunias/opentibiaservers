import LowExpStatusNorthAmericaKeywordPage, { generateMetadata } from './low-exp-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusNorthAmericaKeywordPage />;
}
