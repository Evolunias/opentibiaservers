import PremiaWarsKeywordPage, { generateMetadata } from './premia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaWarsKeywordPage />;
}
