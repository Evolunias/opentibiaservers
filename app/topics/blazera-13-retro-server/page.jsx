import Blazera13RetroServerKeywordPage, { generateMetadata } from './blazera-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13RetroServerKeywordPage />;
}
