import NewMidhemOtServerKeywordPage, { generateMetadata } from './new-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemOtServerKeywordPage />;
}
