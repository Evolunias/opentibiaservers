import RealestaLatinAmericaServerKeywordPage, { generateMetadata } from './realesta-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaLatinAmericaServerKeywordPage />;
}
