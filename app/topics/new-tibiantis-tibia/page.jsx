import NewTibiantisTibiaKeywordPage, { generateMetadata } from './new-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisTibiaKeywordPage />;
}
