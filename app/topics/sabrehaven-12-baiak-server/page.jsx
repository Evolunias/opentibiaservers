import Sabrehaven12BaiakServerKeywordPage, { generateMetadata } from './sabrehaven-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12BaiakServerKeywordPage />;
}
