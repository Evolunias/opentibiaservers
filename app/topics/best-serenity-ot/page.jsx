import BestSerenityOtKeywordPage, { generateMetadata } from './best-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityOtKeywordPage />;
}
