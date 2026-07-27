import CurrentCalmeraOtRegisterKeywordPage, { generateMetadata } from './current-calmera-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCalmeraOtRegisterKeywordPage />;
}
