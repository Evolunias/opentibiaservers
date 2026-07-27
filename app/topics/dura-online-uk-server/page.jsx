import DuraOnlineUkServerKeywordPage, { generateMetadata } from './dura-online-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineUkServerKeywordPage />;
}
