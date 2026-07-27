import PvpEnforcedOtServerScreenshotsKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerScreenshotsKeywordPage />;
}
