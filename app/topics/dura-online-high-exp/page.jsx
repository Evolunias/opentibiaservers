import DuraOnlineHighExpKeywordPage, { generateMetadata } from './dura-online-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineHighExpKeywordPage />;
}
