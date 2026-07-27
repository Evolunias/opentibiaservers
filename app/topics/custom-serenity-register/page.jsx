import CustomSerenityRegisterKeywordPage, { generateMetadata } from './custom-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityRegisterKeywordPage />;
}
