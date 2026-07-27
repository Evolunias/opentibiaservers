import NewLumineraOtKeywordPage, { generateMetadata } from './new-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraOtKeywordPage />;
}
