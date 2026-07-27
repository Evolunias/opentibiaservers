import Luminera12BaiakServerKeywordPage, { generateMetadata } from './luminera-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12BaiakServerKeywordPage />;
}
