import IridiaOpenPvpKeywordPage, { generateMetadata } from './iridia-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaOpenPvpKeywordPage />;
}
