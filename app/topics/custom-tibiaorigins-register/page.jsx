import CustomTibiaoriginsRegisterKeywordPage, { generateMetadata } from './custom-tibiaorigins-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsRegisterKeywordPage />;
}
