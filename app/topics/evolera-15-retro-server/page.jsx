import Evolera15RetroServerKeywordPage, { generateMetadata } from './evolera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15RetroServerKeywordPage />;
}
