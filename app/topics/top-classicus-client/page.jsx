import TopClassicusClientKeywordPage, { generateMetadata } from './top-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusClientKeywordPage />;
}
