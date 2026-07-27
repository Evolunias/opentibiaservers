import PopularSabrehavenOtKeywordPage, { generateMetadata } from './popular-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenOtKeywordPage />;
}
