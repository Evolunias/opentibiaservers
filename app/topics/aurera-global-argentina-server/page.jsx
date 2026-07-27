import AureraGlobalArgentinaServerKeywordPage, { generateMetadata } from './aurera-global-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalArgentinaServerKeywordPage />;
}
