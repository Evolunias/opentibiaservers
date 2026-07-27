import Luminera14RetroServerKeywordPage, { generateMetadata } from './luminera-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14RetroServerKeywordPage />;
}
