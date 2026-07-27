import Tibiantis11BaiakServerKeywordPage, { generateMetadata } from './tibiantis-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11BaiakServerKeywordPage />;
}
