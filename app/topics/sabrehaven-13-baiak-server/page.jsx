import Sabrehaven13BaiakServerKeywordPage, { generateMetadata } from './sabrehaven-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13BaiakServerKeywordPage />;
}
