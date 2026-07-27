import NewLumineraKeywordPage, { generateMetadata } from './new-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraKeywordPage />;
}
