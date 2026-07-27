import CustomImperianicGuideKeywordPage, { generateMetadata } from './custom-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicGuideKeywordPage />;
}
