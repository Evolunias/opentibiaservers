import BestZnoteAacKeywordPage, { generateMetadata } from './best-znote-aac';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZnoteAacKeywordPage />;
}
