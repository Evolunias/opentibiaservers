import RefugiaOpenPvpKeywordPage, { generateMetadata } from './refugia-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaOpenPvpKeywordPage />;
}
