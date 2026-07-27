import TopClassicusServerKeywordPage, { generateMetadata } from './top-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusServerKeywordPage />;
}
