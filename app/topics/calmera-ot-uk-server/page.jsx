import CalmeraOtUkServerKeywordPage, { generateMetadata } from './calmera-ot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtUkServerKeywordPage />;
}
