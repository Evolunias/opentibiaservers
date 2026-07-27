import ObsidiaServerKeywordPage, { generateMetadata } from './obsidia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaServerKeywordPage />;
}
