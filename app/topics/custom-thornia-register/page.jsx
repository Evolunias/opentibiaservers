import CustomThorniaRegisterKeywordPage, { generateMetadata } from './custom-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaRegisterKeywordPage />;
}
