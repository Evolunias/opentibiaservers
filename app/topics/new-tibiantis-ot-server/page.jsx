import NewTibiantisOtServerKeywordPage, { generateMetadata } from './new-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisOtServerKeywordPage />;
}
