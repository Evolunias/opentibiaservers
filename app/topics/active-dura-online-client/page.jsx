import ActiveDuraOnlineClientKeywordPage, { generateMetadata } from './active-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineClientKeywordPage />;
}
