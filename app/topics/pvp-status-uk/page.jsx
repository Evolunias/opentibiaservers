import PvpStatusUkKeywordPage, { generateMetadata } from './pvp-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusUkKeywordPage />;
}
