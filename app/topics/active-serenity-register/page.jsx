import ActiveSerenityRegisterKeywordPage, { generateMetadata } from './active-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityRegisterKeywordPage />;
}
