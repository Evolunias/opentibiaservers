import FideraWarsKeywordPage, { generateMetadata } from './fidera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraWarsKeywordPage />;
}
