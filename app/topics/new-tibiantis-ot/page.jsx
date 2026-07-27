import NewTibiantisOtKeywordPage, { generateMetadata } from './new-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisOtKeywordPage />;
}
