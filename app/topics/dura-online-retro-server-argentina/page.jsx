import DuraOnlineRetroServerArgentinaKeywordPage, { generateMetadata } from './dura-online-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRetroServerArgentinaKeywordPage />;
}
