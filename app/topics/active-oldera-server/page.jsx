import ActiveOlderaServerKeywordPage, { generateMetadata } from './active-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaServerKeywordPage />;
}
