import CustomClassicusRegisterKeywordPage, { generateMetadata } from './custom-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusRegisterKeywordPage />;
}
