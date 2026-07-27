import BestCoxaotLoginKeywordPage, { generateMetadata } from './best-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotLoginKeywordPage />;
}
