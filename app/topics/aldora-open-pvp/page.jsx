import AldoraOpenPvpKeywordPage, { generateMetadata } from './aldora-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraOpenPvpKeywordPage />;
}
