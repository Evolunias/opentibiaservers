import TopXanteriaOtKeywordPage, { generateMetadata } from './top-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaOtKeywordPage />;
}
