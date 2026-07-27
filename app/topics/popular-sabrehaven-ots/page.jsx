import PopularSabrehavenOtsKeywordPage, { generateMetadata } from './popular-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenOtsKeywordPage />;
}
