import CurrentLumineraOfficialKeywordPage, { generateMetadata } from './current-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraOfficialKeywordPage />;
}
