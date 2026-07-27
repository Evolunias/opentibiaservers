import Carlinot13EvoServerKeywordPage, { generateMetadata } from './carlinot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13EvoServerKeywordPage />;
}
