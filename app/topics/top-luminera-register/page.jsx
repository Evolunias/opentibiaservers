import TopLumineraRegisterKeywordPage, { generateMetadata } from './top-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraRegisterKeywordPage />;
}
