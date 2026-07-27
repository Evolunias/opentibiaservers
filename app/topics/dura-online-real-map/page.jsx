import DuraOnlineRealMapKeywordPage, { generateMetadata } from './dura-online-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRealMapKeywordPage />;
}
