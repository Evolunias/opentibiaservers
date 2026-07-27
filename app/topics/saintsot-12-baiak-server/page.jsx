import Saintsot12BaiakServerKeywordPage, { generateMetadata } from './saintsot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12BaiakServerKeywordPage />;
}
