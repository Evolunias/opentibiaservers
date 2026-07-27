import CalmeraOtMexicoServerKeywordPage, { generateMetadata } from './calmera-ot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtMexicoServerKeywordPage />;
}
