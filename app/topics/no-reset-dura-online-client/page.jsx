import NoResetDuraOnlineClientKeywordPage, { generateMetadata } from './no-reset-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineClientKeywordPage />;
}
