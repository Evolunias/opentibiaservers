import CustomTibiaoriginsGuideKeywordPage, { generateMetadata } from './custom-tibiaorigins-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsGuideKeywordPage />;
}
