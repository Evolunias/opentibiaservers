import EvoluniaBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './evolunia-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaBaiakServerLatinAmericaKeywordPage />;
}
