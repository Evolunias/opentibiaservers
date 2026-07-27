import Blazera96RetroServerKeywordPage, { generateMetadata } from './blazera-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera96RetroServerKeywordPage />;
}
