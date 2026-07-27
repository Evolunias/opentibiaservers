import BestThorniaCreateAccountKeywordPage, { generateMetadata } from './best-thornia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaCreateAccountKeywordPage />;
}
