import Evolunia15BaiakServerKeywordPage, { generateMetadata } from './evolunia-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15BaiakServerKeywordPage />;
}
