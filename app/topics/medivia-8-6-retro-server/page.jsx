import Medivia86RetroServerKeywordPage, { generateMetadata } from './medivia-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia86RetroServerKeywordPage />;
}
