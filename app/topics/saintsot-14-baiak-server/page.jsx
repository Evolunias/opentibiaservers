import Saintsot14BaiakServerKeywordPage, { generateMetadata } from './saintsot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot14BaiakServerKeywordPage />;
}
