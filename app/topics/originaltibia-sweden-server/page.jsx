import OriginaltibiaSwedenServerKeywordPage, { generateMetadata } from './originaltibia-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSwedenServerKeywordPage />;
}
