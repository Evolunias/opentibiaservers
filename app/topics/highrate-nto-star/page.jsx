import HighrateNtoStarKeywordPage, { generateMetadata } from './highrate-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarKeywordPage />;
}
