import LowrateZuneraOtLoginKeywordPage, { generateMetadata } from './lowrate-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZuneraOtLoginKeywordPage />;
}
