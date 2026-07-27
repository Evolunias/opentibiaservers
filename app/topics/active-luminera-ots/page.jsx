import ActiveLumineraOtsKeywordPage, { generateMetadata } from './active-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraOtsKeywordPage />;
}
