import CustomCoxaotGuideKeywordPage, { generateMetadata } from './custom-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotGuideKeywordPage />;
}
