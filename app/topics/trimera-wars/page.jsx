import TrimeraWarsKeywordPage, { generateMetadata } from './trimera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraWarsKeywordPage />;
}
