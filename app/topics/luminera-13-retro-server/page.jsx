import Luminera13RetroServerKeywordPage, { generateMetadata } from './luminera-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13RetroServerKeywordPage />;
}
