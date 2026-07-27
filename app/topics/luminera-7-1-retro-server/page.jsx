import Luminera71RetroServerKeywordPage, { generateMetadata } from './luminera-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71RetroServerKeywordPage />;
}
