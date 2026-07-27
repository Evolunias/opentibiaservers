import PopularTibiaraClientKeywordPage, { generateMetadata } from './popular-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraClientKeywordPage />;
}
