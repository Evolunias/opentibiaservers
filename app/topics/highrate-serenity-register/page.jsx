import HighrateSerenityRegisterKeywordPage, { generateMetadata } from './highrate-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityRegisterKeywordPage />;
}
