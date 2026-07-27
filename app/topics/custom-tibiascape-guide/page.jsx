import CustomTibiascapeGuideKeywordPage, { generateMetadata } from './custom-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeGuideKeywordPage />;
}
