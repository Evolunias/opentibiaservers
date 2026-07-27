import CurrentMidhemLoginKeywordPage, { generateMetadata } from './current-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemLoginKeywordPage />;
}
