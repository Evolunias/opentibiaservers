import PopularTibianusServerKeywordPage, { generateMetadata } from './popular-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusServerKeywordPage />;
}
