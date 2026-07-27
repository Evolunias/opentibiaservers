import SaintsotRetroServerArgentinaKeywordPage, { generateMetadata } from './saintsot-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerArgentinaKeywordPage />;
}
