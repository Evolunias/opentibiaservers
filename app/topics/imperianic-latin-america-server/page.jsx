import ImperianicLatinAmericaServerKeywordPage, { generateMetadata } from './imperianic-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicLatinAmericaServerKeywordPage />;
}
