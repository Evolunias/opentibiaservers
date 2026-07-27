import CustomMediviaWebsiteKeywordPage, { generateMetadata } from './custom-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaWebsiteKeywordPage />;
}
