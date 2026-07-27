import Carlinot15RetroServerKeywordPage, { generateMetadata } from './carlinot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15RetroServerKeywordPage />;
}
