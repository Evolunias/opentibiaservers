import PvpStatusNorthAmericaKeywordPage, { generateMetadata } from './pvp-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusNorthAmericaKeywordPage />;
}
