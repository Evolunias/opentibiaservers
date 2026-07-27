import Luminera80RetroServerKeywordPage, { generateMetadata } from './luminera-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80RetroServerKeywordPage />;
}
