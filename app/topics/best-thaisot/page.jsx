import BestThaisotKeywordPage, { generateMetadata } from './best-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotKeywordPage />;
}
