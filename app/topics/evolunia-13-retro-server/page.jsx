import Evolunia13RetroServerKeywordPage, { generateMetadata } from './evolunia-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13RetroServerKeywordPage />;
}
