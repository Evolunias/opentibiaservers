import BestMediviaKeywordPage, { generateMetadata } from './best-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaKeywordPage />;
}
