import DuraOnlineRetroServerBrazilKeywordPage, { generateMetadata } from './dura-online-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRetroServerBrazilKeywordPage />;
}
