import BlazeraVipKeywordPage, { generateMetadata } from './blazera-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraVipKeywordPage />;
}
