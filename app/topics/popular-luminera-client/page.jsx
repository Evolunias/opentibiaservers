import PopularLumineraClientKeywordPage, { generateMetadata } from './popular-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraClientKeywordPage />;
}
