import CustomTibiascapeWebsiteKeywordPage, { generateMetadata } from './custom-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeWebsiteKeywordPage />;
}
