import PvpeClassickDrakoriaServerKeywordPage, { generateMetadata } from './pvpe-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClassickDrakoriaServerKeywordPage />;
}
