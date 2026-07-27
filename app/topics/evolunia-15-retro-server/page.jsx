import Evolunia15RetroServerKeywordPage, { generateMetadata } from './evolunia-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15RetroServerKeywordPage />;
}
