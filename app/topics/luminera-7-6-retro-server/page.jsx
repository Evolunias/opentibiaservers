import Luminera76RetroServerKeywordPage, { generateMetadata } from './luminera-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76RetroServerKeywordPage />;
}
