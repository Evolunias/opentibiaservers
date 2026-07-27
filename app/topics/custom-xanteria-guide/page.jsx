import CustomXanteriaGuideKeywordPage, { generateMetadata } from './custom-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaGuideKeywordPage />;
}
