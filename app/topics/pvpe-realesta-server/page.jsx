import PvpeRealestaServerKeywordPage, { generateMetadata } from './pvpe-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRealestaServerKeywordPage />;
}
