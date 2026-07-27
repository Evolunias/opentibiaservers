import PvpEnforcedServerListLatinAmericaKeywordPage, { generateMetadata } from './pvp-enforced-server-list-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListLatinAmericaKeywordPage />;
}
