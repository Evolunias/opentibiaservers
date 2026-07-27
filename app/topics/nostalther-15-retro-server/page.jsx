import Nostalther15RetroServerKeywordPage, { generateMetadata } from './nostalther-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther15RetroServerKeywordPage />;
}
