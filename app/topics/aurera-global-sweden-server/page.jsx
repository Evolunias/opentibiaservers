import AureraGlobalSwedenServerKeywordPage, { generateMetadata } from './aurera-global-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSwedenServerKeywordPage />;
}
