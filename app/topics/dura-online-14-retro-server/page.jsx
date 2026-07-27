import DuraOnline14RetroServerKeywordPage, { generateMetadata } from './dura-online-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline14RetroServerKeywordPage />;
}
