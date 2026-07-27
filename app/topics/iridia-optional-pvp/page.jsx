import IridiaOptionalPvpKeywordPage, { generateMetadata } from './iridia-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaOptionalPvpKeywordPage />;
}
