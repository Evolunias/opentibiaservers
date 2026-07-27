import LumineraMexicoServersKeywordPage, { generateMetadata } from './luminera-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraMexicoServersKeywordPage />;
}
