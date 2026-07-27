import PytheraWarsKeywordPage, { generateMetadata } from './pythera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraWarsKeywordPage />;
}
