import PopularLumineraOfficialKeywordPage, { generateMetadata } from './popular-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraOfficialKeywordPage />;
}
