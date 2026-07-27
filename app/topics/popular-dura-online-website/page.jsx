import PopularDuraOnlineWebsiteKeywordPage, { generateMetadata } from './popular-dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDuraOnlineWebsiteKeywordPage />;
}
