import TopImperianicOtsKeywordPage, { generateMetadata } from './top-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicOtsKeywordPage />;
}
