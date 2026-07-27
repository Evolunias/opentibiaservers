import BestClassicusClientKeywordPage, { generateMetadata } from './best-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusClientKeywordPage />;
}
