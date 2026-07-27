import LowrateNepreniaCreateAccountKeywordPage, { generateMetadata } from './lowrate-neprenia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaCreateAccountKeywordPage />;
}
