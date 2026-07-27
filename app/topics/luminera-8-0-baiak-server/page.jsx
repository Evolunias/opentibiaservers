import Luminera80BaiakServerKeywordPage, { generateMetadata } from './luminera-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80BaiakServerKeywordPage />;
}
