import PvpeServerListLatinAmericaKeywordPage, { generateMetadata } from './pvpe-server-list-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListLatinAmericaKeywordPage />;
}
