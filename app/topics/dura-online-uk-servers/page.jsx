import DuraOnlineUkServersKeywordPage, { generateMetadata } from './dura-online-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineUkServersKeywordPage />;
}
