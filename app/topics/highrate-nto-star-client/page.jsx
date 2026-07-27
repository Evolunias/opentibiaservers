import HighrateNtoStarClientKeywordPage, { generateMetadata } from './highrate-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarClientKeywordPage />;
}
