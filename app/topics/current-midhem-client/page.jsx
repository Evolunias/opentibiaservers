import CurrentMidhemClientKeywordPage, { generateMetadata } from './current-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemClientKeywordPage />;
}
