import Venoreot14RetroServerKeywordPage, { generateMetadata } from './venoreot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14RetroServerKeywordPage />;
}
