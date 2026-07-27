import DuraOnlineRetroServerMexicoKeywordPage, { generateMetadata } from './dura-online-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRetroServerMexicoKeywordPage />;
}
