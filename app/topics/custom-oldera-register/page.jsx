import CustomOlderaRegisterKeywordPage, { generateMetadata } from './custom-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaRegisterKeywordPage />;
}
