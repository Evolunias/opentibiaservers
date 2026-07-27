import HighrateLumineraRegisterKeywordPage, { generateMetadata } from './highrate-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraRegisterKeywordPage />;
}
