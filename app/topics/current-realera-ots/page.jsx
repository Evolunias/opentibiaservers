import CurrentRealeraOtsKeywordPage, { generateMetadata } from './current-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraOtsKeywordPage />;
}
