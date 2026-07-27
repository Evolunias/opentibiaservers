import MidhemLoginKeywordPage, { generateMetadata } from './midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemLoginKeywordPage />;
}
