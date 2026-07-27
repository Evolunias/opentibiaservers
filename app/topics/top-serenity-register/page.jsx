import TopSerenityRegisterKeywordPage, { generateMetadata } from './top-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityRegisterKeywordPage />;
}
