import DanubiaOpenPvpKeywordPage, { generateMetadata } from './danubia-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaOpenPvpKeywordPage />;
}
