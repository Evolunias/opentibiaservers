import MidhemWarsKeywordPage, { generateMetadata } from './midhem-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemWarsKeywordPage />;
}
