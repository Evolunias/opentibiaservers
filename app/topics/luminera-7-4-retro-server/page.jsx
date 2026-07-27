import Luminera74RetroServerKeywordPage, { generateMetadata } from './luminera-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74RetroServerKeywordPage />;
}
