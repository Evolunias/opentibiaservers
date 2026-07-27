import CurrentYurotsOtServerKeywordPage, { generateMetadata } from './current-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsOtServerKeywordPage />;
}
