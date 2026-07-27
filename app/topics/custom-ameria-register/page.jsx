import CustomAmeriaRegisterKeywordPage, { generateMetadata } from './custom-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaRegisterKeywordPage />;
}
