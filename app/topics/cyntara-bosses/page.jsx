import CyntaraBossesKeywordPage, { generateMetadata } from './cyntara-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBossesKeywordPage />;
}
