import Nostalther13RetroServerKeywordPage, { generateMetadata } from './nostalther-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther13RetroServerKeywordPage />;
}
