import Venoreot15EvoServerKeywordPage, { generateMetadata } from './venoreot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15EvoServerKeywordPage />;
}
