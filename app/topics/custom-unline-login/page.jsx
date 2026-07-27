import CustomUnlineLoginKeywordPage, { generateMetadata } from './custom-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineLoginKeywordPage />;
}
