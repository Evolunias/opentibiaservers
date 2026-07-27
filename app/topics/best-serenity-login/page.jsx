import BestSerenityLoginKeywordPage, { generateMetadata } from './best-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityLoginKeywordPage />;
}
