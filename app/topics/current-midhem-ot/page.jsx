import CurrentMidhemOtKeywordPage, { generateMetadata } from './current-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemOtKeywordPage />;
}
