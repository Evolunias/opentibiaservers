import Carlinot11EvoServerKeywordPage, { generateMetadata } from './carlinot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11EvoServerKeywordPage />;
}
