import BestSerenityKeywordPage, { generateMetadata } from './best-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityKeywordPage />;
}
