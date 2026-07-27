import Evolunia13BaiakServerKeywordPage, { generateMetadata } from './evolunia-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13BaiakServerKeywordPage />;
}
