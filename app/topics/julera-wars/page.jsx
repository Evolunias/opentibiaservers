import JuleraWarsKeywordPage, { generateMetadata } from './julera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraWarsKeywordPage />;
}
