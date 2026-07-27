import FreshStartLumineraRegisterKeywordPage, { generateMetadata } from './fresh-start-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraRegisterKeywordPage />;
}
