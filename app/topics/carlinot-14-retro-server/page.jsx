import Carlinot14RetroServerKeywordPage, { generateMetadata } from './carlinot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14RetroServerKeywordPage />;
}
