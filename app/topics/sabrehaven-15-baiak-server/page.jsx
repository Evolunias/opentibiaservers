import Sabrehaven15BaiakServerKeywordPage, { generateMetadata } from './sabrehaven-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15BaiakServerKeywordPage />;
}
