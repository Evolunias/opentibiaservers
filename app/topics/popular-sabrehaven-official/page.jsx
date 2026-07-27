import PopularSabrehavenOfficialKeywordPage, { generateMetadata } from './popular-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenOfficialKeywordPage />;
}
