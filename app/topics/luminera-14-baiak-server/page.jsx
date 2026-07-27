import Luminera14BaiakServerKeywordPage, { generateMetadata } from './luminera-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14BaiakServerKeywordPage />;
}
