import CustomClassicusKeywordPage, { generateMetadata } from './custom-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusKeywordPage />;
}
