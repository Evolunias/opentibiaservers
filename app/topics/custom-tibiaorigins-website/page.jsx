import CustomTibiaoriginsWebsiteKeywordPage, { generateMetadata } from './custom-tibiaorigins-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsWebsiteKeywordPage />;
}
