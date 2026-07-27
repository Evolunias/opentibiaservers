import BestYurotsOfficialKeywordPage, { generateMetadata } from './best-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsOfficialKeywordPage />;
}
