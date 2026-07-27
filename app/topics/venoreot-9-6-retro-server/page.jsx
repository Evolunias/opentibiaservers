import Venoreot96RetroServerKeywordPage, { generateMetadata } from './venoreot-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot96RetroServerKeywordPage />;
}
