import CurrentZezeniaOnlineOfficialKeywordPage, { generateMetadata } from './current-zezenia-online-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineOfficialKeywordPage />;
}
