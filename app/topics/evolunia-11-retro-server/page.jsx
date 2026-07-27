import Evolunia11RetroServerKeywordPage, { generateMetadata } from './evolunia-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia11RetroServerKeywordPage />;
}
