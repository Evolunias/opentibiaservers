import CustomTibijkaOtsKeywordPage, { generateMetadata } from './custom-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaOtsKeywordPage />;
}
