import CurrentLumineraKeywordPage, { generateMetadata } from './current-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraKeywordPage />;
}
