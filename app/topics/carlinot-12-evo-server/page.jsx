import Carlinot12EvoServerKeywordPage, { generateMetadata } from './carlinot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12EvoServerKeywordPage />;
}
