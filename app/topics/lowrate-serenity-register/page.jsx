import LowrateSerenityRegisterKeywordPage, { generateMetadata } from './lowrate-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityRegisterKeywordPage />;
}
