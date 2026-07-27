import PvpEnforcedCoxaotServerKeywordPage, { generateMetadata } from './pvp-enforced-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedCoxaotServerKeywordPage />;
}
