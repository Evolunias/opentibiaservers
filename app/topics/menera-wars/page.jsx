import MeneraWarsKeywordPage, { generateMetadata } from './menera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraWarsKeywordPage />;
}
