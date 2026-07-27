import ClassicusRealMapServerArgentinaKeywordPage, { generateMetadata } from './classicus-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRealMapServerArgentinaKeywordPage />;
}
