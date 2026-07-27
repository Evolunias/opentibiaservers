import CustomTibijkaRegisterKeywordPage, { generateMetadata } from './custom-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaRegisterKeywordPage />;
}
