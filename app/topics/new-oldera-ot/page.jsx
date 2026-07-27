import NewOlderaOtKeywordPage, { generateMetadata } from './new-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaOtKeywordPage />;
}
