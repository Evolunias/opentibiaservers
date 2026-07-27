import CurrentMidhemOtServerKeywordPage, { generateMetadata } from './current-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemOtServerKeywordPage />;
}
