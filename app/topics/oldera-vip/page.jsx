import OlderaVipKeywordPage, { generateMetadata } from './oldera-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaVipKeywordPage />;
}
