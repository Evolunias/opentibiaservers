import LumineraPvpeServerMexicoKeywordPage, { generateMetadata } from './luminera-pvpe-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpeServerMexicoKeywordPage />;
}
