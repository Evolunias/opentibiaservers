import CurrentYurotsLoginKeywordPage, { generateMetadata } from './current-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsLoginKeywordPage />;
}
