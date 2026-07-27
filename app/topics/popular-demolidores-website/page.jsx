import PopularDemolidoresWebsiteKeywordPage, { generateMetadata } from './popular-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresWebsiteKeywordPage />;
}
