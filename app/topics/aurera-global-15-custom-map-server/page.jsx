import AureraGlobal15CustomMapServerKeywordPage, { generateMetadata } from './aurera-global-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal15CustomMapServerKeywordPage />;
}
