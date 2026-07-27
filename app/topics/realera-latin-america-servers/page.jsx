import RealeraLatinAmericaServersKeywordPage, { generateMetadata } from './realera-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraLatinAmericaServersKeywordPage />;
}
