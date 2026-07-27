import OtservlistPvpKeywordPage, { generateMetadata } from './otservlist-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistPvpKeywordPage />;
}
