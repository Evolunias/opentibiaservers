import BaiakServersPolandKeywordPage, { generateMetadata } from './baiak-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersPolandKeywordPage />;
}
