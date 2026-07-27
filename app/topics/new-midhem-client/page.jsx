import NewMidhemClientKeywordPage, { generateMetadata } from './new-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemClientKeywordPage />;
}
