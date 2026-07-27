import ActiveZuneraOtLoginKeywordPage, { generateMetadata } from './active-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtLoginKeywordPage />;
}
