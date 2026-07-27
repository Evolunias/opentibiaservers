import RealestaWarsKeywordPage, { generateMetadata } from './realesta-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaWarsKeywordPage />;
}
