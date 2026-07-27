import NewLumineraOfficialKeywordPage, { generateMetadata } from './new-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraOfficialKeywordPage />;
}
