import ActiveLumineraOtKeywordPage, { generateMetadata } from './active-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraOtKeywordPage />;
}
