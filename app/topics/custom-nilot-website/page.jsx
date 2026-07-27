import CustomNilotWebsiteKeywordPage, { generateMetadata } from './custom-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotWebsiteKeywordPage />;
}
