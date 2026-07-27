import CustomTibiantisRegisterKeywordPage, { generateMetadata } from './custom-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisRegisterKeywordPage />;
}
