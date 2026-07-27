import NewTibiantisClientKeywordPage, { generateMetadata } from './new-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisClientKeywordPage />;
}
