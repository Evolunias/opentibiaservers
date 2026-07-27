import CalmeraOtUsaServerKeywordPage, { generateMetadata } from './calmera-ot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtUsaServerKeywordPage />;
}
