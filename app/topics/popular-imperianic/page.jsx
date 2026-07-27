import PopularImperianicKeywordPage, { generateMetadata } from './popular-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicKeywordPage />;
}
