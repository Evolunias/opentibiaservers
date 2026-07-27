import Sabrehaven14BaiakServerKeywordPage, { generateMetadata } from './sabrehaven-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14BaiakServerKeywordPage />;
}
