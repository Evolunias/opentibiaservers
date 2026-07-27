import LumineraFranceServerKeywordPage, { generateMetadata } from './luminera-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraFranceServerKeywordPage />;
}
