import CurrentCarlinotOtKeywordPage, { generateMetadata } from './current-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotOtKeywordPage />;
}
