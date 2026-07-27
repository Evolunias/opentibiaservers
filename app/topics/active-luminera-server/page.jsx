import ActiveLumineraServerKeywordPage, { generateMetadata } from './active-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraServerKeywordPage />;
}
