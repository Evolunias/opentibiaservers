import Venoreot13RetroServerKeywordPage, { generateMetadata } from './venoreot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13RetroServerKeywordPage />;
}
