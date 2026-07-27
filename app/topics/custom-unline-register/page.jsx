import CustomUnlineRegisterKeywordPage, { generateMetadata } from './custom-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineRegisterKeywordPage />;
}
