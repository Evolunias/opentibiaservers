import CustomTibiaoriginsOtKeywordPage, { generateMetadata } from './custom-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsOtKeywordPage />;
}
