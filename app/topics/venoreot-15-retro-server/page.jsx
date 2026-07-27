import Venoreot15RetroServerKeywordPage, { generateMetadata } from './venoreot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15RetroServerKeywordPage />;
}
