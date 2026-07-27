import CustomTibijkaClientKeywordPage, { generateMetadata } from './custom-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaClientKeywordPage />;
}
