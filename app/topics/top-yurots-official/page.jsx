import TopYurotsOfficialKeywordPage, { generateMetadata } from './top-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsOfficialKeywordPage />;
}
