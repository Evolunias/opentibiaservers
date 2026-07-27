import BestDuraOnlineWebsiteKeywordPage, { generateMetadata } from './best-dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDuraOnlineWebsiteKeywordPage />;
}
