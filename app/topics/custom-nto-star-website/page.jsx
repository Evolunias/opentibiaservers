import CustomNtoStarWebsiteKeywordPage, { generateMetadata } from './custom-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarWebsiteKeywordPage />;
}
