import PvpeElderaServerKeywordPage, { generateMetadata } from './pvpe-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeElderaServerKeywordPage />;
}
