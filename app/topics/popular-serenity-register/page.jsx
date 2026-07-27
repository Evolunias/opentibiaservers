import PopularSerenityRegisterKeywordPage, { generateMetadata } from './popular-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityRegisterKeywordPage />;
}
