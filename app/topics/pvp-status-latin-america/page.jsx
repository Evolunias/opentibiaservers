import PvpStatusLatinAmericaKeywordPage, { generateMetadata } from './pvp-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusLatinAmericaKeywordPage />;
}
