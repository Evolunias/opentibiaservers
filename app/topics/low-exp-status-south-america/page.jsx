import LowExpStatusSouthAmericaKeywordPage, { generateMetadata } from './low-exp-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusSouthAmericaKeywordPage />;
}
