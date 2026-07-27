import OriginaltibiaPvpKeywordPage, { generateMetadata } from './originaltibia-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaPvpKeywordPage />;
}
