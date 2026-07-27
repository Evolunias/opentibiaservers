import NonPvpServersMexicoKeywordPage, { generateMetadata } from './non-pvp-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersMexicoKeywordPage />;
}
