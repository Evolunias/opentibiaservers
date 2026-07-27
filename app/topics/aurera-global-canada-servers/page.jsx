import AureraGlobalCanadaServersKeywordPage, { generateMetadata } from './aurera-global-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalCanadaServersKeywordPage />;
}
