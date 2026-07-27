import NewCalmeraOtLoginKeywordPage, { generateMetadata } from './new-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtLoginKeywordPage />;
}
