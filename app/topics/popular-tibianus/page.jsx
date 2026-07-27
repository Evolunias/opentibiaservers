import PopularTibianusKeywordPage, { generateMetadata } from './popular-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusKeywordPage />;
}
