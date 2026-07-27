import Blazera11RetroServerKeywordPage, { generateMetadata } from './blazera-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11RetroServerKeywordPage />;
}
