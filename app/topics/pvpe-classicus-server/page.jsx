import PvpeClassicusServerKeywordPage, { generateMetadata } from './pvpe-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClassicusServerKeywordPage />;
}
