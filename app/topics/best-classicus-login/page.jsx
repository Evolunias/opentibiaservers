import BestClassicusLoginKeywordPage, { generateMetadata } from './best-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusLoginKeywordPage />;
}
