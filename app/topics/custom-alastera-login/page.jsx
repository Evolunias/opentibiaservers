import CustomAlasteraLoginKeywordPage, { generateMetadata } from './custom-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraLoginKeywordPage />;
}
