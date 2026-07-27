import CustomTibijkaLoginKeywordPage, { generateMetadata } from './custom-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaLoginKeywordPage />;
}
