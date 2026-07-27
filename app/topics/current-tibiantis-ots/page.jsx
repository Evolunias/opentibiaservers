import CurrentTibiantisOtsKeywordPage, { generateMetadata } from './current-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisOtsKeywordPage />;
}
