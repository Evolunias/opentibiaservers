import MidhemClientKeywordPage, { generateMetadata } from './midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemClientKeywordPage />;
}
