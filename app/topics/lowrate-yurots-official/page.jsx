import LowrateYurotsOfficialKeywordPage, { generateMetadata } from './lowrate-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsOfficialKeywordPage />;
}
