import BestAureraGlobalServerKeywordPage, { generateMetadata } from './best-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAureraGlobalServerKeywordPage />;
}
