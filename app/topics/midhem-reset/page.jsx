import MidhemResetKeywordPage, { generateMetadata } from './midhem-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemResetKeywordPage />;
}
