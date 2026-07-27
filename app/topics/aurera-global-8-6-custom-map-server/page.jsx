import AureraGlobal86CustomMapServerKeywordPage, { generateMetadata } from './aurera-global-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal86CustomMapServerKeywordPage />;
}
