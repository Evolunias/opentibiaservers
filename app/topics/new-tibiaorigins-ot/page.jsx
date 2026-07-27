import NewTibiaoriginsOtKeywordPage, { generateMetadata } from './new-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsOtKeywordPage />;
}
