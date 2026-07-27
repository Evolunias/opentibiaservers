import NewLumineraClientKeywordPage, { generateMetadata } from './new-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraClientKeywordPage />;
}
