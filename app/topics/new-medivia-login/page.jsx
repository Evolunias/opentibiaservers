import NewMediviaLoginKeywordPage, { generateMetadata } from './new-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaLoginKeywordPage />;
}
