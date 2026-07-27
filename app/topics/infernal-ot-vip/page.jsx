import InfernalOtVipKeywordPage, { generateMetadata } from './infernal-ot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtVipKeywordPage />;
}
