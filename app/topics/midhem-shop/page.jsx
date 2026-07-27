import MidhemShopKeywordPage, { generateMetadata } from './midhem-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemShopKeywordPage />;
}
