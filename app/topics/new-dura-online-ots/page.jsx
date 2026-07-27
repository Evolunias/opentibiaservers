import NewDuraOnlineOtsKeywordPage, { generateMetadata } from './new-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDuraOnlineOtsKeywordPage />;
}
