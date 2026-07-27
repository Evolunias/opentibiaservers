import OtServerListRealMapKeywordPage, { generateMetadata } from './ot-server-list-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListRealMapKeywordPage />;
}
