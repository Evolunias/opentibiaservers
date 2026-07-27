import Saintsot15BaiakServerKeywordPage, { generateMetadata } from './saintsot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15BaiakServerKeywordPage />;
}
