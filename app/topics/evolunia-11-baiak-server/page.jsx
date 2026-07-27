import Evolunia11BaiakServerKeywordPage, { generateMetadata } from './evolunia-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia11BaiakServerKeywordPage />;
}
