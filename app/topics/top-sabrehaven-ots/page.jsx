import TopSabrehavenOtsKeywordPage, { generateMetadata } from './top-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenOtsKeywordPage />;
}
