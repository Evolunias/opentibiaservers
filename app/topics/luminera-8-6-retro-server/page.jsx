import Luminera86RetroServerKeywordPage, { generateMetadata } from './luminera-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86RetroServerKeywordPage />;
}
