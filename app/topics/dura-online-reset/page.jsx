import DuraOnlineResetKeywordPage, { generateMetadata } from './dura-online-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineResetKeywordPage />;
}
