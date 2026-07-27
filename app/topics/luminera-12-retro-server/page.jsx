import Luminera12RetroServerKeywordPage, { generateMetadata } from './luminera-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12RetroServerKeywordPage />;
}
