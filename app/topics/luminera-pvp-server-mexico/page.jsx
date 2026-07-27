import LumineraPvpServerMexicoKeywordPage, { generateMetadata } from './luminera-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpServerMexicoKeywordPage />;
}
