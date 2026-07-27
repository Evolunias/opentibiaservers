import NewMidhemKeywordPage, { generateMetadata } from './new-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemKeywordPage />;
}
