import DuraOnlineSwedenServersKeywordPage, { generateMetadata } from './dura-online-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSwedenServersKeywordPage />;
}
