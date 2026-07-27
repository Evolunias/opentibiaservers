import CalmeraOtVipKeywordPage, { generateMetadata } from './calmera-ot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtVipKeywordPage />;
}
