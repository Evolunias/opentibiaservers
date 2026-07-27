import CurrentClassicusOtKeywordPage, { generateMetadata } from './current-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusOtKeywordPage />;
}
