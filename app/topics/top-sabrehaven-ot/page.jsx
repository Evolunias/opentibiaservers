import TopSabrehavenOtKeywordPage, { generateMetadata } from './top-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenOtKeywordPage />;
}
