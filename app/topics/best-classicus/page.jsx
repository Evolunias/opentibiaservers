import BestClassicusKeywordPage, { generateMetadata } from './best-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusKeywordPage />;
}
