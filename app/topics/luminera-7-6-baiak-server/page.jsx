import Luminera76BaiakServerKeywordPage, { generateMetadata } from './luminera-7-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76BaiakServerKeywordPage />;
}
