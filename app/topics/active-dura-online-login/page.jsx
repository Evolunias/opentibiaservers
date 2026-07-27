import ActiveDuraOnlineLoginKeywordPage, { generateMetadata } from './active-dura-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineLoginKeywordPage />;
}
