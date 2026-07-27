import TopClassicusLoginKeywordPage, { generateMetadata } from './top-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusLoginKeywordPage />;
}
