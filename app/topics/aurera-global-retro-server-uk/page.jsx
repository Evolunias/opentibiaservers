import AureraGlobalRetroServerUkKeywordPage, { generateMetadata } from './aurera-global-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalRetroServerUkKeywordPage />;
}
