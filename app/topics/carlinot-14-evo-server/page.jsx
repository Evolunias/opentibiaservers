import Carlinot14EvoServerKeywordPage, { generateMetadata } from './carlinot-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14EvoServerKeywordPage />;
}
