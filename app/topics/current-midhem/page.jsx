import CurrentMidhemKeywordPage, { generateMetadata } from './current-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemKeywordPage />;
}
