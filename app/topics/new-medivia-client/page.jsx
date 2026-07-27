import NewMediviaClientKeywordPage, { generateMetadata } from './new-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaClientKeywordPage />;
}
