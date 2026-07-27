import OriginaltibiaSwedenServersKeywordPage, { generateMetadata } from './originaltibia-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSwedenServersKeywordPage />;
}
