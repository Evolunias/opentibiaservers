import HighExpNtoStarServerKeywordPage, { generateMetadata } from './high-exp-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpNtoStarServerKeywordPage />;
}
