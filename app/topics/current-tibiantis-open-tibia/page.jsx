import CurrentTibiantisOpenTibiaKeywordPage, { generateMetadata } from './current-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisOpenTibiaKeywordPage />;
}
