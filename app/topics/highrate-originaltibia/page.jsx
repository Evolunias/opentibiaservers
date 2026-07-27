import HighrateOriginaltibiaKeywordPage, { generateMetadata } from './highrate-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOriginaltibiaKeywordPage />;
}
