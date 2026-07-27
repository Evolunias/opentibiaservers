import Luminera86BaiakServerKeywordPage, { generateMetadata } from './luminera-8-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86BaiakServerKeywordPage />;
}
