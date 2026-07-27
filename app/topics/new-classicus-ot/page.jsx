import NewClassicusOtKeywordPage, { generateMetadata } from './new-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusOtKeywordPage />;
}
