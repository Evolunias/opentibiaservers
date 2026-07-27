import CalmeraOtOtServerKeywordPage, { generateMetadata } from './calmera-ot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtOtServerKeywordPage />;
}
