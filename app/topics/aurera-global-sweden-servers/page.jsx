import AureraGlobalSwedenServersKeywordPage, { generateMetadata } from './aurera-global-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSwedenServersKeywordPage />;
}
