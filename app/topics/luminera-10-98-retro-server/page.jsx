import Luminera1098RetroServerKeywordPage, { generateMetadata } from './luminera-10-98-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera1098RetroServerKeywordPage />;
}
