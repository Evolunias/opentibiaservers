import PvpStatusMexicoKeywordPage, { generateMetadata } from './pvp-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusMexicoKeywordPage />;
}
