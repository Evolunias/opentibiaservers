import AureraGlobalCanadaServerKeywordPage, { generateMetadata } from './aurera-global-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalCanadaServerKeywordPage />;
}
