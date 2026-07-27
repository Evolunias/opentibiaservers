import NewImperianicOtKeywordPage, { generateMetadata } from './new-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicOtKeywordPage />;
}
