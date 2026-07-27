import CurrentLumineraRegisterKeywordPage, { generateMetadata } from './current-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraRegisterKeywordPage />;
}
