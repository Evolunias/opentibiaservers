import CustomTibiantisGuideKeywordPage, { generateMetadata } from './custom-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisGuideKeywordPage />;
}
