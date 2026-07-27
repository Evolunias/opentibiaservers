import ValoriaHistoryKeywordPage, { generateMetadata } from './valoria-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaHistoryKeywordPage />;
}
