import PvpEnforcedClassicusServerKeywordPage, { generateMetadata } from './pvp-enforced-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClassicusServerKeywordPage />;
}
