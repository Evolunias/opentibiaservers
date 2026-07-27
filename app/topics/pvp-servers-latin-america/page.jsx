import PvpServersLatinAmericaKeywordPage, { generateMetadata } from './pvp-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersLatinAmericaKeywordPage />;
}
