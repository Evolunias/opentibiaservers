import PopularTibianusLoginKeywordPage, { generateMetadata } from './popular-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusLoginKeywordPage />;
}
