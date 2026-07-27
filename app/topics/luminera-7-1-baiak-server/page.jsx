import Luminera71BaiakServerKeywordPage, { generateMetadata } from './luminera-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71BaiakServerKeywordPage />;
}
