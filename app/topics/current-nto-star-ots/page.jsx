import CurrentNtoStarOtsKeywordPage, { generateMetadata } from './current-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarOtsKeywordPage />;
}
