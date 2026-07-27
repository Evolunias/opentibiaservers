import AureraGlobalRetroServerUsaKeywordPage, { generateMetadata } from './aurera-global-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalRetroServerUsaKeywordPage />;
}
