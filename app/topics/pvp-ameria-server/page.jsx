import PvpAmeriaServerKeywordPage, { generateMetadata } from './pvp-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpAmeriaServerKeywordPage />;
}
