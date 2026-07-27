import ActiveMediviaRegisterKeywordPage, { generateMetadata } from './active-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaRegisterKeywordPage />;
}
