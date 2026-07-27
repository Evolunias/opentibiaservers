import CyntaraTibiaKeywordPage, { generateMetadata } from './cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraTibiaKeywordPage />;
}
