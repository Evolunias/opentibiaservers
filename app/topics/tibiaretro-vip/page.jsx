import TibiaretroVipKeywordPage, { generateMetadata } from './tibiaretro-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroVipKeywordPage />;
}
