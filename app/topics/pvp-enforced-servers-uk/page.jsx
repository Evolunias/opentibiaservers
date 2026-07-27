import PvpEnforcedServersUkKeywordPage, { generateMetadata } from './pvp-enforced-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersUkKeywordPage />;
}
