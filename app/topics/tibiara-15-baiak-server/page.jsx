import Tibiara15BaiakServerKeywordPage, { generateMetadata } from './tibiara-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15BaiakServerKeywordPage />;
}
