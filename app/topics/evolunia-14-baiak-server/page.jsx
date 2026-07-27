import Evolunia14BaiakServerKeywordPage, { generateMetadata } from './evolunia-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14BaiakServerKeywordPage />;
}
