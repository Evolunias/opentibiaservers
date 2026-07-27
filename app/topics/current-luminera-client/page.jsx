import CurrentLumineraClientKeywordPage, { generateMetadata } from './current-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraClientKeywordPage />;
}
