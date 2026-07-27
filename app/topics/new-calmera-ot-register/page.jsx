import NewCalmeraOtRegisterKeywordPage, { generateMetadata } from './new-calmera-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtRegisterKeywordPage />;
}
