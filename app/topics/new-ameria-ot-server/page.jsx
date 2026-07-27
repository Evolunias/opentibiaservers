import NewAmeriaOtServerKeywordPage, { generateMetadata } from './new-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaOtServerKeywordPage />;
}
