import PvpStatusArgentinaKeywordPage, { generateMetadata } from './pvp-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusArgentinaKeywordPage />;
}
