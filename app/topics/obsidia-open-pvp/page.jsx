import ObsidiaOpenPvpKeywordPage, { generateMetadata } from './obsidia-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaOpenPvpKeywordPage />;
}
