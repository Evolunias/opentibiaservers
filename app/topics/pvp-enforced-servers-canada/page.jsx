import PvpEnforcedServersCanadaKeywordPage, { generateMetadata } from './pvp-enforced-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersCanadaKeywordPage />;
}
