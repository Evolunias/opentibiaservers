import CustomTibijkaOtKeywordPage, { generateMetadata } from './custom-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaOtKeywordPage />;
}
