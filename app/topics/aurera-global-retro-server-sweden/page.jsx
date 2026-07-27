import AureraGlobalRetroServerSwedenKeywordPage, { generateMetadata } from './aurera-global-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalRetroServerSwedenKeywordPage />;
}
