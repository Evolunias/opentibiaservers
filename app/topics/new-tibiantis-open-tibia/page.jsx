import NewTibiantisOpenTibiaKeywordPage, { generateMetadata } from './new-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisOpenTibiaKeywordPage />;
}
