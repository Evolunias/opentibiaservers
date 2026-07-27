import Thornia15RetroServerKeywordPage, { generateMetadata } from './thornia-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15RetroServerKeywordPage />;
}
