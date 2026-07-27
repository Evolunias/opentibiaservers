import BestEmpirebrWebsiteKeywordPage, { generateMetadata } from './best-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrWebsiteKeywordPage />;
}
