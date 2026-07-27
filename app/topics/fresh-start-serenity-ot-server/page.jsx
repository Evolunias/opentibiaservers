import FreshStartSerenityOtServerKeywordPage, { generateMetadata } from './fresh-start-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityOtServerKeywordPage />;
}
