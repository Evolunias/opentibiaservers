import Venoreot11RetroServerKeywordPage, { generateMetadata } from './venoreot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11RetroServerKeywordPage />;
}
