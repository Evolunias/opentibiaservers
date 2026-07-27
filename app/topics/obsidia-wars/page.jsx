import ObsidiaWarsKeywordPage, { generateMetadata } from './obsidia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaWarsKeywordPage />;
}
