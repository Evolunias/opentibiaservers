import BestSerenityClientKeywordPage, { generateMetadata } from './best-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityClientKeywordPage />;
}
