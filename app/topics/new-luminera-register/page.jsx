import NewLumineraRegisterKeywordPage, { generateMetadata } from './new-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraRegisterKeywordPage />;
}
