import MorganaWarsKeywordPage, { generateMetadata } from './morgana-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaWarsKeywordPage />;
}
