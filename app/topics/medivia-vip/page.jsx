import MediviaVipKeywordPage, { generateMetadata } from './medivia-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaVipKeywordPage />;
}
