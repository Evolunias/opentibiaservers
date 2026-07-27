import OtServersNonPvpKeywordPage, { generateMetadata } from './ot-servers-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersNonPvpKeywordPage />;
}
