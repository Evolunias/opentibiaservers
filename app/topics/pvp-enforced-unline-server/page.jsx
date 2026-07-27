import PvpEnforcedUnlineServerKeywordPage, { generateMetadata } from './pvp-enforced-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedUnlineServerKeywordPage />;
}
