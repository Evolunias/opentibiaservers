import OfficialOlderaServerKeywordPage, { generateMetadata } from './official-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaServerKeywordPage />;
}
