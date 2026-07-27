import CustomTibiantisWebsiteKeywordPage, { generateMetadata } from './custom-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisWebsiteKeywordPage />;
}
