import OxygenotLatinAmericaServersKeywordPage, { generateMetadata } from './oxygenot-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotLatinAmericaServersKeywordPage />;
}
