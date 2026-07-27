import HarmoniaOtVipKeywordPage, { generateMetadata } from './harmonia-ot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtVipKeywordPage />;
}
