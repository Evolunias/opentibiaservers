import PvpeOlderaServerKeywordPage, { generateMetadata } from './pvpe-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOlderaServerKeywordPage />;
}
