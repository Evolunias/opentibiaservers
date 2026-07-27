import HighrateYurotsOfficialKeywordPage, { generateMetadata } from './highrate-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsOfficialKeywordPage />;
}
