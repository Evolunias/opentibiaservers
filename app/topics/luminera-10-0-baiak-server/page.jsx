import Luminera100BaiakServerKeywordPage, { generateMetadata } from './luminera-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100BaiakServerKeywordPage />;
}
