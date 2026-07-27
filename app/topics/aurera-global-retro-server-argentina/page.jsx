import AureraGlobalRetroServerArgentinaKeywordPage, { generateMetadata } from './aurera-global-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalRetroServerArgentinaKeywordPage />;
}
