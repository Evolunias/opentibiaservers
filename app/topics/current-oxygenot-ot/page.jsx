import CurrentOxygenotOtKeywordPage, { generateMetadata } from './current-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotOtKeywordPage />;
}
