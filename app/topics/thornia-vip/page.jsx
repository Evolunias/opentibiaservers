import ThorniaVipKeywordPage, { generateMetadata } from './thornia-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaVipKeywordPage />;
}
