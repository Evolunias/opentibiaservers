import Imperianic15EvoServerKeywordPage, { generateMetadata } from './imperianic-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15EvoServerKeywordPage />;
}
