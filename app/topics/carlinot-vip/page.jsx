import CarlinotVipKeywordPage, { generateMetadata } from './carlinot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotVipKeywordPage />;
}
