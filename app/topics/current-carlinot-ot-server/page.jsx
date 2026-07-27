import CurrentCarlinotOtServerKeywordPage, { generateMetadata } from './current-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotOtServerKeywordPage />;
}
