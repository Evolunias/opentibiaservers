import PvpeKasteriaServerKeywordPage, { generateMetadata } from './pvpe-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeKasteriaServerKeywordPage />;
}
