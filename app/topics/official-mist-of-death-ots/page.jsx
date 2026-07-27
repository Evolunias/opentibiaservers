import OfficialMistOfDeathOtsKeywordPage, { generateMetadata } from './official-mist-of-death-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMistOfDeathOtsKeywordPage />;
}
