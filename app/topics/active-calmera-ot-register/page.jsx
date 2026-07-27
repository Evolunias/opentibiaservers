import ActiveCalmeraOtRegisterKeywordPage, { generateMetadata } from './active-calmera-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtRegisterKeywordPage />;
}
