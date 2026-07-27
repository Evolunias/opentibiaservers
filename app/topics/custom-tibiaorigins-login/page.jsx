import CustomTibiaoriginsLoginKeywordPage, { generateMetadata } from './custom-tibiaorigins-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsLoginKeywordPage />;
}
