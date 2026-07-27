import TopMidhemOfficialKeywordPage, { generateMetadata } from './top-midhem-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemOfficialKeywordPage />;
}
