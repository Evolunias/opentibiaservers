import PvpeNtoStarServerKeywordPage, { generateMetadata } from './pvpe-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeNtoStarServerKeywordPage />;
}
