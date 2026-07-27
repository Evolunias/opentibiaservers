import NoxiousotVipKeywordPage, { generateMetadata } from './noxiousot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotVipKeywordPage />;
}
