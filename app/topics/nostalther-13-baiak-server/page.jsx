import Nostalther13BaiakServerKeywordPage, { generateMetadata } from './nostalther-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther13BaiakServerKeywordPage />;
}
