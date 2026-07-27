import Carlinot11RetroServerKeywordPage, { generateMetadata } from './carlinot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11RetroServerKeywordPage />;
}
