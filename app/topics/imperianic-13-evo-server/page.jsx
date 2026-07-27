import Imperianic13EvoServerKeywordPage, { generateMetadata } from './imperianic-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13EvoServerKeywordPage />;
}
