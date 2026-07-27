import PopularLumineraServerKeywordPage, { generateMetadata } from './popular-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraServerKeywordPage />;
}
