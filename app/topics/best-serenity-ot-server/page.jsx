import BestSerenityOtServerKeywordPage, { generateMetadata } from './best-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityOtServerKeywordPage />;
}
