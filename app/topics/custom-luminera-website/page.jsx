import CustomLumineraWebsiteKeywordPage, { generateMetadata } from './custom-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraWebsiteKeywordPage />;
}
