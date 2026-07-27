import Venoreot12EvoServerKeywordPage, { generateMetadata } from './venoreot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12EvoServerKeywordPage />;
}
