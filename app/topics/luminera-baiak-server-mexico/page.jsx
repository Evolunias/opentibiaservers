import LumineraBaiakServerMexicoKeywordPage, { generateMetadata } from './luminera-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBaiakServerMexicoKeywordPage />;
}
