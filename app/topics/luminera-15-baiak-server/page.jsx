import Luminera15BaiakServerKeywordPage, { generateMetadata } from './luminera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15BaiakServerKeywordPage />;
}
