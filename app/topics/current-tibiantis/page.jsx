import CurrentTibiantisKeywordPage, { generateMetadata } from './current-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisKeywordPage />;
}
