import CalmeraOtFunServerKeywordPage, { generateMetadata } from './calmera-ot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtFunServerKeywordPage />;
}
