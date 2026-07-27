import PvpEnforcedServersUsaKeywordPage, { generateMetadata } from './pvp-enforced-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersUsaKeywordPage />;
}
