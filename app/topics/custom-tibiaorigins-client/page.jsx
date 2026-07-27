import CustomTibiaoriginsClientKeywordPage, { generateMetadata } from './custom-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsClientKeywordPage />;
}
