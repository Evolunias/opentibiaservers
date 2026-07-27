import Blazera14RetroServerKeywordPage, { generateMetadata } from './blazera-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14RetroServerKeywordPage />;
}
