import PvpStatusBrazilKeywordPage, { generateMetadata } from './pvp-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusBrazilKeywordPage />;
}
