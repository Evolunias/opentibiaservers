import PvpeServersArgentinaKeywordPage, { generateMetadata } from './pvpe-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersArgentinaKeywordPage />;
}
