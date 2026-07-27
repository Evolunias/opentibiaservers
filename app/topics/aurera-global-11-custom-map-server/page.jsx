import AureraGlobal11CustomMapServerKeywordPage, { generateMetadata } from './aurera-global-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal11CustomMapServerKeywordPage />;
}
