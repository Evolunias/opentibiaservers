import BestClassicusServerKeywordPage, { generateMetadata } from './best-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusServerKeywordPage />;
}
