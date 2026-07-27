import CustomThorniaGuideKeywordPage, { generateMetadata } from './custom-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaGuideKeywordPage />;
}
