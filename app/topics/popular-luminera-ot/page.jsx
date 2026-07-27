import PopularLumineraOtKeywordPage, { generateMetadata } from './popular-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraOtKeywordPage />;
}
