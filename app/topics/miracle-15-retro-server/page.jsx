import Miracle15RetroServerKeywordPage, { generateMetadata } from './miracle-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15RetroServerKeywordPage />;
}
