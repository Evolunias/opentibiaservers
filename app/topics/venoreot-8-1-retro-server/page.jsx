import Venoreot81RetroServerKeywordPage, { generateMetadata } from './venoreot-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot81RetroServerKeywordPage />;
}
