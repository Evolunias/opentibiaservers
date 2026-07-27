import PopularXanteriaOtServerKeywordPage, { generateMetadata } from './popular-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaOtServerKeywordPage />;
}
