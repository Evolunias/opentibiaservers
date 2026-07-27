import ActiveLumineraClientKeywordPage, { generateMetadata } from './active-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraClientKeywordPage />;
}
