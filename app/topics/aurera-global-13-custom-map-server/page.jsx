import AureraGlobal13CustomMapServerKeywordPage, { generateMetadata } from './aurera-global-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal13CustomMapServerKeywordPage />;
}
