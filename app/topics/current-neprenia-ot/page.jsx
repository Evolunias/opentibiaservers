import CurrentNepreniaOtKeywordPage, { generateMetadata } from './current-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaOtKeywordPage />;
}
