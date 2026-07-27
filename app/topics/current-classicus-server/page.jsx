import CurrentClassicusServerKeywordPage, { generateMetadata } from './current-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusServerKeywordPage />;
}
