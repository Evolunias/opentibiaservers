import DuraOnlineSwedenServerKeywordPage, { generateMetadata } from './dura-online-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSwedenServerKeywordPage />;
}
