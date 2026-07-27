import NewEmpirebrWebsiteKeywordPage, { generateMetadata } from './new-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrWebsiteKeywordPage />;
}
