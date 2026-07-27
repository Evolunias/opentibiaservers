import NewClassicusKeywordPage, { generateMetadata } from './new-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusKeywordPage />;
}
