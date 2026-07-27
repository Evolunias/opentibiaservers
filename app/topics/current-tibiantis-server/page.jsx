import CurrentTibiantisServerKeywordPage, { generateMetadata } from './current-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisServerKeywordPage />;
}
