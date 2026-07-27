import PopularTibianusClientKeywordPage, { generateMetadata } from './popular-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusClientKeywordPage />;
}
