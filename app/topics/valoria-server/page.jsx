import ValoriaServerKeywordPage, { generateMetadata } from './valoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaServerKeywordPage />;
}
