import NewMediviaKeywordPage, { generateMetadata } from './new-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaKeywordPage />;
}
