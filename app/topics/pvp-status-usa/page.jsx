import PvpStatusUsaKeywordPage, { generateMetadata } from './pvp-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusUsaKeywordPage />;
}
