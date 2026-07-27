import CustomTibijkaOfficialKeywordPage, { generateMetadata } from './custom-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaOfficialKeywordPage />;
}
