import LuceraOpenPvpKeywordPage, { generateMetadata } from './lucera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraOpenPvpKeywordPage />;
}
