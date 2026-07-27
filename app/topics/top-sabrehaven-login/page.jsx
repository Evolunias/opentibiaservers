import TopSabrehavenLoginKeywordPage, { generateMetadata } from './top-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenLoginKeywordPage />;
}
