import Luminera84RetroServerKeywordPage, { generateMetadata } from './luminera-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84RetroServerKeywordPage />;
}
