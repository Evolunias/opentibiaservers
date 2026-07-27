import LumineraFranceServersKeywordPage, { generateMetadata } from './luminera-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraFranceServersKeywordPage />;
}
