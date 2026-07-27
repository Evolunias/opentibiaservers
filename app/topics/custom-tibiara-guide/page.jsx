import CustomTibiaraGuideKeywordPage, { generateMetadata } from './custom-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraGuideKeywordPage />;
}
