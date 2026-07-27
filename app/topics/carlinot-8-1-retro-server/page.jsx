import Carlinot81RetroServerKeywordPage, { generateMetadata } from './carlinot-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot81RetroServerKeywordPage />;
}
