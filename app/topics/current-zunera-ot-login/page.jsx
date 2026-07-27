import CurrentZuneraOtLoginKeywordPage, { generateMetadata } from './current-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtLoginKeywordPage />;
}
