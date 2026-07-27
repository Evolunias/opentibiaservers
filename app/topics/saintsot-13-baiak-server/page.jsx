import Saintsot13BaiakServerKeywordPage, { generateMetadata } from './saintsot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13BaiakServerKeywordPage />;
}
