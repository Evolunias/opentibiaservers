import CurrentLumineraLoginKeywordPage, { generateMetadata } from './current-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraLoginKeywordPage />;
}
