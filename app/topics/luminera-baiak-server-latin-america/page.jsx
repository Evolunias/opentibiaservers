import LumineraBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './luminera-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBaiakServerLatinAmericaKeywordPage />;
}
