import Evolunia86RetroServerKeywordPage, { generateMetadata } from './evolunia-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia86RetroServerKeywordPage />;
}
