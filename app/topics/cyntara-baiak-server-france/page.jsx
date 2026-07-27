import CyntaraBaiakServerFranceKeywordPage, { generateMetadata } from './cyntara-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBaiakServerFranceKeywordPage />;
}
