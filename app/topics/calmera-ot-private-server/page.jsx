import CalmeraOtPrivateServerKeywordPage, { generateMetadata } from './calmera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtPrivateServerKeywordPage />;
}
