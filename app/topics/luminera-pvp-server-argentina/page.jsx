import LumineraPvpServerArgentinaKeywordPage, { generateMetadata } from './luminera-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpServerArgentinaKeywordPage />;
}
