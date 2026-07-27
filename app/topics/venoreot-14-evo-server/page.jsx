import Venoreot14EvoServerKeywordPage, { generateMetadata } from './venoreot-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14EvoServerKeywordPage />;
}
