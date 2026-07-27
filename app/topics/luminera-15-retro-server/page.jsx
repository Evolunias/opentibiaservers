import Luminera15RetroServerKeywordPage, { generateMetadata } from './luminera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15RetroServerKeywordPage />;
}
