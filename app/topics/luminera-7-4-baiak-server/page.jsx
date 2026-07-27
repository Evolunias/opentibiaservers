import Luminera74BaiakServerKeywordPage, { generateMetadata } from './luminera-7-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74BaiakServerKeywordPage />;
}
