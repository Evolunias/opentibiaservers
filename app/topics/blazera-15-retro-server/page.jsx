import Blazera15RetroServerKeywordPage, { generateMetadata } from './blazera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15RetroServerKeywordPage />;
}
