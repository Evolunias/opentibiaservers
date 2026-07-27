import CurrentSerenityOtKeywordPage, { generateMetadata } from './current-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityOtKeywordPage />;
}
