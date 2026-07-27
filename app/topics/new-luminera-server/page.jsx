import NewLumineraServerKeywordPage, { generateMetadata } from './new-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraServerKeywordPage />;
}
