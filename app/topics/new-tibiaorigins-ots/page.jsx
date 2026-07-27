import NewTibiaoriginsOtsKeywordPage, { generateMetadata } from './new-tibiaorigins-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsOtsKeywordPage />;
}
