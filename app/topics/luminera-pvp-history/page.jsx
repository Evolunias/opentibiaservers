import LumineraPvpHistoryKeywordPage, { generateMetadata } from './luminera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpHistoryKeywordPage />;
}
