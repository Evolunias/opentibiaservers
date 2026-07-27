import Blazera86RetroServerKeywordPage, { generateMetadata } from './blazera-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera86RetroServerKeywordPage />;
}
