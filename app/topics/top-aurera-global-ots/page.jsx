import TopAureraGlobalOtsKeywordPage, { generateMetadata } from './top-aurera-global-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalOtsKeywordPage />;
}
