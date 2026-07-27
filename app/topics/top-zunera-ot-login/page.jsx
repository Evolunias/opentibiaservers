import TopZuneraOtLoginKeywordPage, { generateMetadata } from './top-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtLoginKeywordPage />;
}
