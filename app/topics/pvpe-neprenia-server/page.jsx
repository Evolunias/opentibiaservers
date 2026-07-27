import PvpeNepreniaServerKeywordPage, { generateMetadata } from './pvpe-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeNepreniaServerKeywordPage />;
}
