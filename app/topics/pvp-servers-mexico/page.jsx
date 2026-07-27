import PvpServersMexicoKeywordPage, { generateMetadata } from './pvp-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersMexicoKeywordPage />;
}
