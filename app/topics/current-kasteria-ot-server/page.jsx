import CurrentKasteriaOtServerKeywordPage, { generateMetadata } from './current-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaOtServerKeywordPage />;
}
