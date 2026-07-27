import EvoleraCustomMapServerArgentinaKeywordPage, { generateMetadata } from './evolera-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCustomMapServerArgentinaKeywordPage />;
}
