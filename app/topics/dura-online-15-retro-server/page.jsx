import DuraOnline15RetroServerKeywordPage, { generateMetadata } from './dura-online-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15RetroServerKeywordPage />;
}
