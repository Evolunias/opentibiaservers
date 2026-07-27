import JameraOpenPvpKeywordPage, { generateMetadata } from './jamera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraOpenPvpKeywordPage />;
}
