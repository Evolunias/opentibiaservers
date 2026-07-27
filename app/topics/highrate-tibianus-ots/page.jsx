import HighrateTibianusOtsKeywordPage, { generateMetadata } from './highrate-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusOtsKeywordPage />;
}
