import MarolaotVipKeywordPage, { generateMetadata } from './marolaot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotVipKeywordPage />;
}
