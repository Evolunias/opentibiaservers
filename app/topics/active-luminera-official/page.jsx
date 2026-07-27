import ActiveLumineraOfficialKeywordPage, { generateMetadata } from './active-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraOfficialKeywordPage />;
}
