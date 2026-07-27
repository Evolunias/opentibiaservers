import Imperianic12EvoServerKeywordPage, { generateMetadata } from './imperianic-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12EvoServerKeywordPage />;
}
