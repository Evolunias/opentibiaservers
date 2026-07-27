import Luminera13BaiakServerKeywordPage, { generateMetadata } from './luminera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13BaiakServerKeywordPage />;
}
