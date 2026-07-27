import Venoreot86RetroServerKeywordPage, { generateMetadata } from './venoreot-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot86RetroServerKeywordPage />;
}
