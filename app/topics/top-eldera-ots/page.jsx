import TopElderaOtsKeywordPage, { generateMetadata } from './top-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaOtsKeywordPage />;
}
