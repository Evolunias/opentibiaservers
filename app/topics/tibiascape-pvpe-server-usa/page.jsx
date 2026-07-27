import TibiascapePvpeServerUsaKeywordPage, { generateMetadata } from './tibiascape-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePvpeServerUsaKeywordPage />;
}
