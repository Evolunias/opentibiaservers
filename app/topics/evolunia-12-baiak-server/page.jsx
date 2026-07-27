import Evolunia12BaiakServerKeywordPage, { generateMetadata } from './evolunia-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12BaiakServerKeywordPage />;
}
