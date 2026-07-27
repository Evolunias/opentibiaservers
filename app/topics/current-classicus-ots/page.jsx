import CurrentClassicusOtsKeywordPage, { generateMetadata } from './current-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusOtsKeywordPage />;
}
