import ArcaniarlVipKeywordPage, { generateMetadata } from './arcaniarl-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlVipKeywordPage />;
}
