import CurrentDuraOnlineClientKeywordPage, { generateMetadata } from './current-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineClientKeywordPage />;
}
