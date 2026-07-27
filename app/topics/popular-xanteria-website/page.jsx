import PopularXanteriaWebsiteKeywordPage, { generateMetadata } from './popular-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaWebsiteKeywordPage />;
}
