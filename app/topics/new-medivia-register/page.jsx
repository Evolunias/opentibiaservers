import NewMediviaRegisterKeywordPage, { generateMetadata } from './new-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaRegisterKeywordPage />;
}
