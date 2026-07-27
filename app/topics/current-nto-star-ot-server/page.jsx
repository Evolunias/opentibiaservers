import CurrentNtoStarOtServerKeywordPage, { generateMetadata } from './current-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarOtServerKeywordPage />;
}
