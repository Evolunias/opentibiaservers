import TopClassicusKeywordPage, { generateMetadata } from './top-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusKeywordPage />;
}
