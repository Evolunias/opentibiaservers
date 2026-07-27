import AureraGlobalUkServerKeywordPage, { generateMetadata } from './aurera-global-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalUkServerKeywordPage />;
}
