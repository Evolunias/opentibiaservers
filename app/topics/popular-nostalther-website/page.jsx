import PopularNostaltherWebsiteKeywordPage, { generateMetadata } from './popular-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherWebsiteKeywordPage />;
}
