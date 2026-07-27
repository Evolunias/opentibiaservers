import NewTibiaoriginsKeywordPage, { generateMetadata } from './new-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsKeywordPage />;
}
