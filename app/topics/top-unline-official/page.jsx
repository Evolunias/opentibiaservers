import TopUnlineOfficialKeywordPage, { generateMetadata } from './top-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineOfficialKeywordPage />;
}
