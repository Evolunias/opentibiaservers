import PvpeServersMexicoKeywordPage, { generateMetadata } from './pvpe-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersMexicoKeywordPage />;
}
