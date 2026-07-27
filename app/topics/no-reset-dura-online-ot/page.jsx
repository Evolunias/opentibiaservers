import NoResetDuraOnlineOtKeywordPage, { generateMetadata } from './no-reset-dura-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineOtKeywordPage />;
}
