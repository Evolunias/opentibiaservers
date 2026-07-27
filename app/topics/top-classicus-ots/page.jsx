import TopClassicusOtsKeywordPage, { generateMetadata } from './top-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusOtsKeywordPage />;
}
