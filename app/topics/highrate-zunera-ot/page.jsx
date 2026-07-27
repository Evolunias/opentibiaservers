import HighrateZuneraOtKeywordPage, { generateMetadata } from './highrate-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZuneraOtKeywordPage />;
}
