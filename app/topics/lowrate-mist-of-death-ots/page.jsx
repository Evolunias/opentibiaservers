import LowrateMistOfDeathOtsKeywordPage, { generateMetadata } from './lowrate-mist-of-death-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMistOfDeathOtsKeywordPage />;
}
