import BestCoxaotKeywordPage, { generateMetadata } from './best-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotKeywordPage />;
}
