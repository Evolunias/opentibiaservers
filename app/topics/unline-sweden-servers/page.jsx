import UnlineSwedenServersKeywordPage, { generateMetadata } from './unline-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSwedenServersKeywordPage />;
}
