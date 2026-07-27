import GuardiaWarsKeywordPage, { generateMetadata } from './guardia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaWarsKeywordPage />;
}
