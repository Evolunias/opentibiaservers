import CustomTibiaoriginsOtsKeywordPage, { generateMetadata } from './custom-tibiaorigins-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsOtsKeywordPage />;
}
