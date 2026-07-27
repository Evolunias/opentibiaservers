import Luminera100RetroServerKeywordPage, { generateMetadata } from './luminera-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100RetroServerKeywordPage />;
}
