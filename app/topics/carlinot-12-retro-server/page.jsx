import Carlinot12RetroServerKeywordPage, { generateMetadata } from './carlinot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12RetroServerKeywordPage />;
}
