import Evolunia14RetroServerKeywordPage, { generateMetadata } from './evolunia-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14RetroServerKeywordPage />;
}
