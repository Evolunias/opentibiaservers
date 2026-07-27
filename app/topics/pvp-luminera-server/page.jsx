import PvpLumineraServerKeywordPage, { generateMetadata } from './pvp-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLumineraServerKeywordPage />;
}
