import Luminera11RetroServerKeywordPage, { generateMetadata } from './luminera-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11RetroServerKeywordPage />;
}
