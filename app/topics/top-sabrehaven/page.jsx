import TopSabrehavenKeywordPage, { generateMetadata } from './top-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenKeywordPage />;
}
