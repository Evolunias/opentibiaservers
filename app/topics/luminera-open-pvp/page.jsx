import LumineraOpenPvpKeywordPage, { generateMetadata } from './luminera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraOpenPvpKeywordPage />;
}
