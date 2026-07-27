import CustomTibiaoriginsOfficialKeywordPage, { generateMetadata } from './custom-tibiaorigins-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsOfficialKeywordPage />;
}
