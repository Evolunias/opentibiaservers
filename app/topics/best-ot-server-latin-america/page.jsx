import BestOtServerLatinAmericaKeywordPage, { generateMetadata } from './best-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerLatinAmericaKeywordPage />;
}
