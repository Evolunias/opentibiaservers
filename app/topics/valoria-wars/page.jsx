import ValoriaWarsKeywordPage, { generateMetadata } from './valoria-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaWarsKeywordPage />;
}
