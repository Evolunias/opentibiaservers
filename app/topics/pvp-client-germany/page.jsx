import PvpClientGermanyKeywordPage, { generateMetadata } from './pvp-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientGermanyKeywordPage />;
}
