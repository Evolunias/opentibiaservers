import CurrentYurotsKeywordPage, { generateMetadata } from './current-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsKeywordPage />;
}
