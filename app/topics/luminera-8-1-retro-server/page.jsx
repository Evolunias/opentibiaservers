import Luminera81RetroServerKeywordPage, { generateMetadata } from './luminera-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81RetroServerKeywordPage />;
}
