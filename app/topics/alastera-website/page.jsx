import AlasteraWebsiteKeywordPage, { generateMetadata } from './alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWebsiteKeywordPage />;
}
