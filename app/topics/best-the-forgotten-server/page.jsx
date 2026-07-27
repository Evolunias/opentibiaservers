import BestTheForgottenServerKeywordPage, { generateMetadata } from './best-the-forgotten-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTheForgottenServerKeywordPage />;
}
