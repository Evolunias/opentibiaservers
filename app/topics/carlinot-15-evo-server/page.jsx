import Carlinot15EvoServerKeywordPage, { generateMetadata } from './carlinot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15EvoServerKeywordPage />;
}
