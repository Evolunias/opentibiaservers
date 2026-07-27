import NewLumineraOtServerKeywordPage, { generateMetadata } from './new-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraOtServerKeywordPage />;
}
