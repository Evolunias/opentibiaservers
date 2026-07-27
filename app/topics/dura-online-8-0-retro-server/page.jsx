import DuraOnline80RetroServerKeywordPage, { generateMetadata } from './dura-online-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline80RetroServerKeywordPage />;
}
