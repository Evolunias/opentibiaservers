import SaintsotRetroServerSwedenKeywordPage, { generateMetadata } from './saintsot-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerSwedenKeywordPage />;
}
