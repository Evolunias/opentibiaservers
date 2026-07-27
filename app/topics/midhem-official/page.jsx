import MidhemOfficialKeywordPage, { generateMetadata } from './midhem-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemOfficialKeywordPage />;
}
