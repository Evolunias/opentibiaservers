import SameraOpenPvpKeywordPage, { generateMetadata } from './samera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraOpenPvpKeywordPage />;
}
