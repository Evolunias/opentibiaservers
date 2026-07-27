import LiberaOpenPvpKeywordPage, { generateMetadata } from './libera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaOpenPvpKeywordPage />;
}
