import AureraGlobal12CustomMapServerKeywordPage, { generateMetadata } from './aurera-global-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal12CustomMapServerKeywordPage />;
}
