import HighrateElderaOfficialKeywordPage, { generateMetadata } from './highrate-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaOfficialKeywordPage />;
}
