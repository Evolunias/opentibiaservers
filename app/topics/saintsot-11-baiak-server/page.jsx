import Saintsot11BaiakServerKeywordPage, { generateMetadata } from './saintsot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11BaiakServerKeywordPage />;
}
