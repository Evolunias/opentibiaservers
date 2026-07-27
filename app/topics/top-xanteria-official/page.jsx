import TopXanteriaOfficialKeywordPage, { generateMetadata } from './top-xanteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaOfficialKeywordPage />;
}
