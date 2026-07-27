import TopRubinotOfficialKeywordPage, { generateMetadata } from './top-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotOfficialKeywordPage />;
}
