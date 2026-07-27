import CustomTibiaoriginsKeywordPage, { generateMetadata } from './custom-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsKeywordPage />;
}
