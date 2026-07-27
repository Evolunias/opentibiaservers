import DuraOnline13RetroServerKeywordPage, { generateMetadata } from './dura-online-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13RetroServerKeywordPage />;
}
