import DuraOnline11RetroServerKeywordPage, { generateMetadata } from './dura-online-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11RetroServerKeywordPage />;
}
