import RealeraWarsKeywordPage, { generateMetadata } from './realera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraWarsKeywordPage />;
}
