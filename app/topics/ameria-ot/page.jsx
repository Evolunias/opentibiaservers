import AmeriaOtKeywordPage, { generateMetadata } from './ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaOtKeywordPage />;
}
