import CurrentTibiantisTibiaKeywordPage, { generateMetadata } from './current-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisTibiaKeywordPage />;
}
