import AureraGlobalFranceServerKeywordPage, { generateMetadata } from './aurera-global-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalFranceServerKeywordPage />;
}
