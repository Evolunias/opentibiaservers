import TibiascapePvpeKeywordPage, { generateMetadata } from './tibiascape-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePvpeKeywordPage />;
}
