import NewTibiaoriginsClientKeywordPage, { generateMetadata } from './new-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsClientKeywordPage />;
}
