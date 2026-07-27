import LumineraRetroServerLatinAmericaKeywordPage, { generateMetadata } from './luminera-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRetroServerLatinAmericaKeywordPage />;
}
