import PvpEnforcedNostaltherServerKeywordPage, { generateMetadata } from './pvp-enforced-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedNostaltherServerKeywordPage />;
}
