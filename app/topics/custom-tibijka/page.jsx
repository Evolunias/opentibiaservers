import CustomTibijkaKeywordPage, { generateMetadata } from './custom-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaKeywordPage />;
}
