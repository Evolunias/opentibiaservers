import CurrentDuraOnlineOfficialKeywordPage, { generateMetadata } from './current-dura-online-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineOfficialKeywordPage />;
}
