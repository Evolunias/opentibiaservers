import ActiveSerenityOtKeywordPage, { generateMetadata } from './active-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityOtKeywordPage />;
}
