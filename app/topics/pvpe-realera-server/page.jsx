import PvpeRealeraServerKeywordPage, { generateMetadata } from './pvpe-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRealeraServerKeywordPage />;
}
