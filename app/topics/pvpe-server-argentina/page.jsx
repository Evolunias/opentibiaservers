import PvpeServerArgentinaKeywordPage, { generateMetadata } from './pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerArgentinaKeywordPage />;
}
