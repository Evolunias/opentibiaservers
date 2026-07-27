import LowrateZuneraOtKeywordPage, { generateMetadata } from './lowrate-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZuneraOtKeywordPage />;
}
