import CurrentLumineraServerKeywordPage, { generateMetadata } from './current-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraServerKeywordPage />;
}
