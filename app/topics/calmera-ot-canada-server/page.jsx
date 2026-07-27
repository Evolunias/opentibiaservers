import CalmeraOtCanadaServerKeywordPage, { generateMetadata } from './calmera-ot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtCanadaServerKeywordPage />;
}
