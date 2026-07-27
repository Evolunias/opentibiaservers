import NoResetDuraOnlineOtsKeywordPage, { generateMetadata } from './no-reset-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineOtsKeywordPage />;
}
