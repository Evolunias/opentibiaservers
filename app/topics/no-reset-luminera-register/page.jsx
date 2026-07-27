import NoResetLumineraRegisterKeywordPage, { generateMetadata } from './no-reset-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraRegisterKeywordPage />;
}
