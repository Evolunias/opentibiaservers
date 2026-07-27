import CurrentYurotsServerKeywordPage, { generateMetadata } from './current-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsServerKeywordPage />;
}
