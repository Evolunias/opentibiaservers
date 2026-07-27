import LowExpCalmeraOtServerKeywordPage, { generateMetadata } from './low-exp-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpCalmeraOtServerKeywordPage />;
}
