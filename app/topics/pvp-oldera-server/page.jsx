import PvpOlderaServerKeywordPage, { generateMetadata } from './pvp-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOlderaServerKeywordPage />;
}
