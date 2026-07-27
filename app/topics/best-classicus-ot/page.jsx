import BestClassicusOtKeywordPage, { generateMetadata } from './best-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusOtKeywordPage />;
}
