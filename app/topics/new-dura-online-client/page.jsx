import NewDuraOnlineClientKeywordPage, { generateMetadata } from './new-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDuraOnlineClientKeywordPage />;
}
