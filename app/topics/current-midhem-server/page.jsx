import CurrentMidhemServerKeywordPage, { generateMetadata } from './current-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemServerKeywordPage />;
}
