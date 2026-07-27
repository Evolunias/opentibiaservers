import CustomClassicusLoginKeywordPage, { generateMetadata } from './custom-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusLoginKeywordPage />;
}
