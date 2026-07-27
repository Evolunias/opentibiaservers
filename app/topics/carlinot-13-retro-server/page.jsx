import Carlinot13RetroServerKeywordPage, { generateMetadata } from './carlinot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13RetroServerKeywordPage />;
}
