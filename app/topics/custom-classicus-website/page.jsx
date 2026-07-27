import CustomClassicusWebsiteKeywordPage, { generateMetadata } from './custom-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusWebsiteKeywordPage />;
}
