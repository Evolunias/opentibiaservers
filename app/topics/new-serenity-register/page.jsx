import NewSerenityRegisterKeywordPage, { generateMetadata } from './new-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityRegisterKeywordPage />;
}
