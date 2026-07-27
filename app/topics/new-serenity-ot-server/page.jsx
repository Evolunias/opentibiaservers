import NewSerenityOtServerKeywordPage, { generateMetadata } from './new-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityOtServerKeywordPage />;
}
