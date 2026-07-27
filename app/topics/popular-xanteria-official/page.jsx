import PopularXanteriaOfficialKeywordPage, { generateMetadata } from './popular-xanteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaOfficialKeywordPage />;
}
