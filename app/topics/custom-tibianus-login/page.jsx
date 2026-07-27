import CustomTibianusLoginKeywordPage, { generateMetadata } from './custom-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusLoginKeywordPage />;
}
