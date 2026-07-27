import CustomTibiaoriginsOtServerKeywordPage, { generateMetadata } from './custom-tibiaorigins-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsOtServerKeywordPage />;
}
