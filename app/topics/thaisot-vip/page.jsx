import ThaisotVipKeywordPage, { generateMetadata } from './thaisot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotVipKeywordPage />;
}
