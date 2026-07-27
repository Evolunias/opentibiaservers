import NewMidhemLoginKeywordPage, { generateMetadata } from './new-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemLoginKeywordPage />;
}
