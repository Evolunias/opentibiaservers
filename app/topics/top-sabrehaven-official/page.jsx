import TopSabrehavenOfficialKeywordPage, { generateMetadata } from './top-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenOfficialKeywordPage />;
}
