import CurrentClassicusClientKeywordPage, { generateMetadata } from './current-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusClientKeywordPage />;
}
