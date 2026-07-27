import NewZuneraOtLoginKeywordPage, { generateMetadata } from './new-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtLoginKeywordPage />;
}
