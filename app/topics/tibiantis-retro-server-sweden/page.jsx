import TibiantisRetroServerSwedenKeywordPage, { generateMetadata } from './tibiantis-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRetroServerSwedenKeywordPage />;
}
