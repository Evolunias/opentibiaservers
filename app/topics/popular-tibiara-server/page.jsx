import PopularTibiaraServerKeywordPage, { generateMetadata } from './popular-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraServerKeywordPage />;
}
