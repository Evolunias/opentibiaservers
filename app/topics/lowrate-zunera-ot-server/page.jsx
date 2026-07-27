import LowrateZuneraOtServerKeywordPage, { generateMetadata } from './lowrate-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZuneraOtServerKeywordPage />;
}
