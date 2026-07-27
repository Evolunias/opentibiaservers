import Venoreot13EvoServerKeywordPage, { generateMetadata } from './venoreot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13EvoServerKeywordPage />;
}
