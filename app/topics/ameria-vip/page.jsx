import AmeriaVipKeywordPage, { generateMetadata } from './ameria-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaVipKeywordPage />;
}
