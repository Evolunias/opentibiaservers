import Venoreot12RetroServerKeywordPage, { generateMetadata } from './venoreot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12RetroServerKeywordPage />;
}
