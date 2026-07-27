import CalmeraOtChileServerKeywordPage, { generateMetadata } from './calmera-ot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtChileServerKeywordPage />;
}
