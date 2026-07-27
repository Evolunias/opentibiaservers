import CurrentNtoStarKeywordPage, { generateMetadata } from './current-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarKeywordPage />;
}
