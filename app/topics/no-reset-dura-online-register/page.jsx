import NoResetDuraOnlineRegisterKeywordPage, { generateMetadata } from './no-reset-dura-online-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineRegisterKeywordPage />;
}
