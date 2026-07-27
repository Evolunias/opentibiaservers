import MidhemOtKeywordPage, { generateMetadata } from './midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemOtKeywordPage />;
}
