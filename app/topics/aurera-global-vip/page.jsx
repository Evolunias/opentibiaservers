import AureraGlobalVipKeywordPage, { generateMetadata } from './aurera-global-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalVipKeywordPage />;
}
