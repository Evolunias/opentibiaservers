import PvpeClientArgentinaKeywordPage, { generateMetadata } from './pvpe-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientArgentinaKeywordPage />;
}
