import NewMidhemOtKeywordPage, { generateMetadata } from './new-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemOtKeywordPage />;
}
