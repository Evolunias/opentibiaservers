import PopularNepreniaKeywordPage, { generateMetadata } from './popular-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaKeywordPage />;
}
